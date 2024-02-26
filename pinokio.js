const path = require('path')
module.exports = {
  version: "1.1",
  title: "MeloTTS",
  description: "High-quality multi-lingual text-to-speech library by MyShell.ai. Support English, Spanish, French, Chinese, Japanese and Korean https://github.com/myshell-ai/MeloTTS",
  icon: "icon.png",
  menu: async (kernel) => {
    let installing = await kernel.running(__dirname, "install.js")
    let installed = await kernel.exists(__dirname, "app", "env")
    let running = await kernel.running(__dirname, "start.js")
    if (installing) {
      return [{
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running) {
        let local = kernel.memory.local[path.resolve(__dirname, "start.js")]
        if (local && local.url) {
          return [{
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else {
        return [{
          icon: "fa-solid fa-power-off",
          text: "English",
          href: "start.js",
          params: {
            install: "pip uninstall -y mecab-python3 python-mecab-ko && pip install -U mecab-python3",
            run: "python app.py EN"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Spanish",
          href: "start.js",
          params: {
            install: "pip uninstall -y mecab-python3 python-mecab-ko && pip install -U mecab-python3",
            run: "python app.py ES"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "French",
          href: "start.js",
          params: {
            install: "pip uninstall -y mecab-python3 python-mecab-ko && pip install -U mecab-python3",
            run: "python app.py FR"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Chinese",
          href: "start.js",
          params: {
            install: "pip uninstall -y mecab-python3 python-mecab-ko && pip install -U mecab-python3",
            run: "python app.py ZH"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Korean",
          href: "start.js",
          params: {
            install: "pip uninstall -y mecab-python3 python-mecab-ko && pip install -U python-mecab-ko",
            run: "python app.py KO"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Japanese",
          href: "start.js",
          params: {
            install: "pip uninstall -y mecab-python3 python-mecab-ko && pip install -U mecab-python3",
            run: "python app.py JP"
          }
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        }]
      }
    } else {
      return [{
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
