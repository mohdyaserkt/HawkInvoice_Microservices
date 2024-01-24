import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { intPort } from "./config/port";
import { customerCreatedListener } from "./events/listener/customer-created-listener";
import { itemCreatedListener } from "./events/listener/item-created-listener";


const start = async () => {
  
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be  defined");
  }

  try {

    await natsWrapper.connect("ecom", "invoiceclientid111", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());
    new customerCreatedListener(natsWrapper.client).listen();
    new itemCreatedListener(natsWrapper.client).listen();
    

    
  } catch (err) {
    console.error(err);
  }

  app.listen(intPort, () => {
    console.log("Listening on port 4000 ......... ");
  });
};

start();
