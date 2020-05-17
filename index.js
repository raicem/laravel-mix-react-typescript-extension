let mix = require("laravel-mix");

class ReactTypeScript {
  constructor() {
    this.toCompile = [];
  }

  dependencies() {
    return [
      "@babel/preset-typescript",
      "@babel/preset-react",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
      "typescript"
    ];
  }

  register(entry, output) {
    entry = [].concat(entry).map(file => new File(file));
    output = new File(output);

    this.toCompile.push({ entry, output });
  }

  webpackEntry(entry) {
    this.toCompile.forEach(js => {
      entry.addFromOutput(
        js.entry.map(file => file.path()),
        js.output,
        js.entry[0]
      );
    });
  }

  webpackRules() {
    return [
      {
        test: /(\.js)$|(\.jsx)$|(\.ts)$|(\.tsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: Config.babel()
          }
        ]
      }
    ];
  }

  webpackConfig(webpackConfig) {
    webpackConfig.resolve.extensions.push(".ts", ".tsx");
  }

  babelConfig() {
    return {
      presets: ["@babel/preset-typescript", "@babel/preset-react"],
      plugins: [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
      ]
    };
  }
}

mix.extend("reactTypeScript", new ReactTypeScript());
