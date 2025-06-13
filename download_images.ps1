# ==============================================================================
# SCRIPT POWERSHELL PARA CORRIGIR CORS DE IMAGENS NO PROJETO ARROWVERSE WIKI
#
# Versão para Windows.
#
# O que ele faz:
# 1. Cria uma pasta /images se ela não existir.
# 2. Faz um backup do seu arquivo 'js/script.js'.
# 3. Encontra todas as URLs de imagem (.jpg, .png, etc.) no arquivo.
# 4. Baixa cada imagem para a pasta /images.
# 5. Substitui a URL da internet pelo caminho local no arquivo de script.
# ==============================================================================

# --- Configuração ---
$jsFile = "js\script.js"
$imgDir = "images"
# ---

# Verifica se o arquivo JS existe
if (-not (Test-Path $jsFile)) {
    Write-Host "ERRO: Arquivo não encontrado em '$jsFile'" -ForegroundColor Red
    Write-Host "Certifique-se de executar este script na pasta principal do seu projeto."
    exit 1
}

# Cria o diretório de imagens se ele não existir
if (-not (Test-Path $imgDir)) {
    New-Item -ItemType Directory -Path $imgDir | Out-Null
}
Write-Host "✅ Pasta '$imgDir' pronta." -ForegroundColor Green

# Cria um backup do arquivo original. Segurança em primeiro lugar!
$backupFile = $jsFile + ".bak"
Copy-Item -Path $jsFile -Destination $backupFile -Force
Write-Host "✅ Backup do seu script criado em '$backupFile'" -ForegroundColor Green

# Encontra todas as URLs de imagem únicas no arquivo
$regex = 'https?://[^\s"''`)]+\.(jpg|jpeg|png|gif|webp)'
$urls = (Get-Content $jsFile) | Select-String -Pattern $regex -AllMatches | ForEach-Object { $_.Matches.Value } | Get-Unique

# Verifica se encontrou alguma URL
if ($null -eq $urls) {
    Write-Host "⚠️ Nenhuma URL de imagem encontrada em '$jsFile'. O script não tem nada a fazer." -ForegroundColor Yellow
    exit 0
}

Write-Host "--------------------------------------------------"
Write-Host "🚀 Iniciando download e substituição de imagens..."
Write-Host "--------------------------------------------------"

# Loop através de cada URL para baixar e substituir
foreach ($url in $urls) {
    # Gera um nome de arquivo seguro e único a partir da URL
    $filename = ($url -replace 'https?://', '') -replace '/', '_'
    $localPath = Join-Path -Path $imgDir -ChildPath $filename

    Write-Host "➡️ Processando URL: $url"

    try {
        # Baixa o arquivo usando Invoke-WebRequest
        Invoke-WebRequest -Uri $url -OutFile $localPath -ErrorAction Stop
        Write-Host "   ✅ Download concluído: $localPath" -ForegroundColor Green

        # Substitui a URL no arquivo JS
        $content = Get-Content $jsFile -Raw
        $newContent = $content.Replace($url, $localPath.Replace('\', '/'))
        Set-Content -Path $jsFile -Value $newContent
        Write-Host "   ✅ URL substituída em '$jsFile'." -ForegroundColor Green

    } catch {
        Write-Host "   ❌ FALHA no download de $url." -ForegroundColor Red
        Write-Host "      Motivo: $($_.Exception.Message)"
    }
    Write-Host "" # Linha em branco para melhor leitura
}


Write-Host "--------------------------------------------------" -ForegroundColor Cyan
Write-Host "🎉 Processo finalizado!" -ForegroundColor Cyan
Write-Host "Verifique seu site. Todas as imagens devem agora ser carregadas localmente." -ForegroundColor Cyan
Write-Host "Lembre-se de enviar a nova pasta '$imgDir' para o seu GitHub." -ForegroundColor Cyan