import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { intPort } from "./config/port";
import { UserCreatedListener } from "./events/listener/user-created-listener";
import { TenantCreatedListener } from "./events/listener/tenant-created-listener";


const start = async () => {
  
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be  defined");
  }

  try {

    await natsWrapper.connect("ecom", "orgclientid1", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());
    new UserCreatedListener(natsWrapper.client).listen();
    new TenantCreatedListener(natsWrapper.client).listen();

    
  } catch (err) {
    console.error(err);
  }

  app.listen(intPort, () => {
    console.log("Listening on port 4000 .......... ");
  });
};

start();
