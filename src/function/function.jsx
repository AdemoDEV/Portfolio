const Ademo = []
Ademo.Styled = {
    Fermer: {color: "rgb(165, 21, 21)"},
    ReactJs: {color: "#00d8ff"},
    Attente: {color: "#E97108"},
    Dev: {color: "#0FA7D5"},
    Open: {color: "#349A14"}
}

Ademo.ChangeColor = function(style, text) {
    return <span style={style}>{text}</span>
}

Ademo.ChangeColorBannner = function(id_input, default_input, class_input) {
    var Color
    var defaultColor = default_input;

    const startup = (event) => {
        Color = document.querySelector(id_input);
        Color.value = defaultColor;
        Color.addEventListener("input", updateFirst, false);
        Color.addEventListener("change", updateAll, false);
        Color.select();
      };

      const updateFirst = (event) => {
        var p = document.querySelector(class_input);
        if (p) {
          p.style.background = event.target.value;
          Color.value = event.target.value;
        }
      }

      const updateAll = (event) => {
        document.querySelectorAll(class_input).forEach(function(p) {
          p.style.background = event.target.value;
        });
      }

      return window.addEventListener("load", startup, false);
}

Ademo.Banner = function(class_input, color) {
    var balise = document.querySelector(class_input);
    if (balise) {
        balise.style.background = color;
    }
}

export default Ademo