/**
 * Function used to configure the conection of the Data Base
 * @returns
 */
const Configuration = () => ({
	user: process.env.USR_SQL_REGACADEMICO,
	password: process.env.PWD_SQL_REGACADEMICO,
	server: process.env.IP_SQL_REGACADEMICO,
	database: process.env.SQL_REGACADEMICO,
	options: {
		encrypt: false,
		enableArithAbort: true,
	},
});

export default Configuration;
