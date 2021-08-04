const {
	override,
	addDecoratorsLegacy,
	disableEsLint,
	addBundleVisualizer,
	addWebpackAlias,
	adjustWorkbox,
    overrideDevServer,
    watchAll
} = require("customize-cra");
const path = require("path");

module.exports = {
    webpack: override(
        // enable legacy decorators babel plugin(装饰器)
        addDecoratorsLegacy(),

        // disable eslint in webpack(不使用eslint)
        disableEsLint(),

        // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
        process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

        // add an alias for "ag-grid-react" imports(别名)
        addWebpackAlias({
            ["ag-grid-react$"]: path.resolve(
                __dirname,
                "src/shared/agGridWrapper.js"
            ),
            ["_pages"]: path.resolve(
                __dirname,
                "src/pages"
            ),
            ["_routes"]: path.resolve(
                __dirname,
                "src/router"
            ),
        }),

        // adjust the underlying workbox
        adjustWorkbox((wb) =>
            Object.assign(wb, {
                skipWaiting: true,
                exclude: (wb.exclude || []).concat("index.html"),
            })
        )
    ),
    devServer: overrideDevServer(
        // dev server plugin
        watchAll()
    )
}
