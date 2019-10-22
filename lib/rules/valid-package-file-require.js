const path = require( 'path' );

function getFullRelativeFilePath( name, context ) {
	const contextDirPath = path.dirname( context.getFilename() );
	const fullAbsolutePath = require.resolve( name, { paths: [ contextDirPath ] } );
	const relativePath = path.relative( contextDirPath, fullAbsolutePath );

	return relativePath.indexOf( '.' ) !== 0 ? `./${relativePath}` : relativePath;
}

module.exports = {
	meta: {
		messages: {
			badFilePath: 'bad resource loader package file path'
		}
	},

	create: function ( context ) {
		return {
			CallExpression: ( node ) => {
				if ( node.callee.name !== 'require' || !node.arguments.length ) {
					return;
				}

				const requiredFileOrModule = node.arguments[ 0 ].value;
				let fullRelativeFilePath;
				try {
					fullRelativeFilePath = getFullRelativeFilePath( requiredFileOrModule, context );
				} catch ( e ) {
					return; // not a file path, probably a RL module. All good!
				}

				if ( requiredFileOrModule !== fullRelativeFilePath ) {
					context.report( { node, messageId: 'badFilePath' } );
				}
			}
		};
	}
};
