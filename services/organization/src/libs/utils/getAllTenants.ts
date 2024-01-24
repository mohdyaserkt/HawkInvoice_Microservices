
import mongoose, { Connection, Model } from "mongoose";
import { connectDB } from "../../config/centralDB/db";
import { organizationSchema } from "../app/database/mongo/schemas/organizationSchema";
import { tenantsSchema } from "../app/database/mongo/schemas/tenantsSchema";
import { userSchema } from "../app/database/mongo/schemas/userSchema";

// Indicates which Schemas are used by whom

const ChildrenSchemas: Map<string, any> = new Map([
  ["Organization", organizationSchema],
]);
const TenantSchemas: Map<string, any> = new Map([
  ["Tenant", tenantsSchema],
  ["User", userSchema],
]);

/** Switch db on the same connection pool
 * @return new connection
 */

const switchDB = async (
  dbName: string,
  dbSchema: Map<string, any>
): Promise<Connection> => {
  const mongooseInstance: any = await connectDB();

  if (mongooseInstance.connection.readyState === 1) {
    const db = mongooseInstance.connection.useDb(dbName, { useCache: true });
    // Prevent from schema re-registration
    if (!Object.keys(db.models).length) {
      dbSchema.forEach((schema, modelName) => {
        db.model(modelName, schema);
      });
    }
    return db;
  }
  throw new Error("error");
};

/**
 * @return model from mongoose
 */

const getDBModel = async (
  db: Connection,
  modelName: string
): Promise<Model<any>> => {
  return db.model(modelName);
};

//for returns a new schema for tenants

export { switchDB, TenantSchemas, ChildrenSchemas, getDBModel };
