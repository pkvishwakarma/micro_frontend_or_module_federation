const {dependencies}=require('./package.json');

module.exports={
    name:'remote',
    filename:'remoteEntry.js',
    exposes:{
        './hello':'./src/PracticeFolder/hello.jsx',
    },
    remotes:{},
    shared:[{
        // 'react':{eager:true},
        // 'react-dom':{eager:true},
        // '@kite-js/core':{eager:true}
        ...dependencies,
        react:{
            singleton:true,
            import:'react',
            shareScope:'default',
            requiredVersion:dependencies.react,
        },
        'react-dom':{
            singleton:true,
            requiredVersion:dependencies['react-dom'],
        },
        'react-router-dom':{
            singleton:true,
            requiredVersion:dependencies['react-router-dom'],
        },
    }],
};