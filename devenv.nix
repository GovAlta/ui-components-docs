{ pkgs, ... }:

{
  # https://devenv.sh/packages/
  packages = [ 
    pkgs.git
    pkgs.nodejs_21
    pkgs.nodePackages_latest.svelte-language-server
    pkgs.nodePackages_latest.typescript-language-server
    pkgs.vscode-langservers-extracted
  ];

  # https://devenv.sh/scripts/
  scripts.hello.exec = "echo GoA UI component docs";

  enterShell = ''
    git --version
    node --version
    echo
    echo =====================
    echo GoA UI Component Docs
    echo =====================
  '';

  # https://devenv.sh/languages/
  languages.nix.enable = true;
  languages.typescript.enable = true;

  # https://devenv.sh/pre-commit-hooks/
  pre-commit.hooks.shellcheck.enable = true;
}
