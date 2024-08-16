const CracoAlias = require('@craco/craco')

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                tsConfigPath: 'tsconfig.paths.json'
            }
        }
    ]
}