import configSQL from "../../core/sql/config";
import CrudSql from "../../core/sql/crud";

const crudSql = new CrudSql(configSQL());

export default crudSql;
