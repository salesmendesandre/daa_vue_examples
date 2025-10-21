#!/bin/bash

# Detectar shell
SHELL_NAME=$(basename "$SHELL")

# Instalar NVM con curl
echo "📦 Instalando NVM..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Detectar archivo de configuración del shell
if [ "$SHELL_NAME" = "zsh" ]; then
  PROFILE="$HOME/.zshrc"
elif [ "$SHELL_NAME" = "bash" ]; then
  PROFILE="$HOME/.bashrc"
else
  PROFILE="$HOME/.profile"
fi

# Añadir configuración de NVM al PATH si no existe
if ! grep -q 'NVM_DIR' "$PROFILE"; then
  echo "🧩 Añadiendo configuración de NVM al PATH en $PROFILE..."
  cat << 'EOF' >> "$PROFILE"

# >>> NVM configuration >>>
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
# <<< NVM configuration <<<
EOF
fi

# Cargar NVM sin reiniciar la terminal
export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1090
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Instalar Node.js 22
echo "🟢 Instalando Node.js v22..."
nvm install 22

# Usar Node.js 22 por defecto
nvm alias default 22
nvm use default

# Mostrar versiones
echo "✅ Node instalado: $(node -v)"
echo "✅ NPM instalado: $(npm -v)"

echo "🎉 Instalación completada. Reinicia tu terminal para aplicar los cambios."
