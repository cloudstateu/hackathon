const { EventHubProducerClient } = require("@azure/event-hubs");
async function main() {
    const producerClient = new EventHubProducerClient("EVENTHUB_CONNECTION_STRING", "databroker");
      setInterval(async function(){
          const eventDataBatch = await producerClient.createBatch();
          const data = {
              carID: Math.floor(Math.random() * 1000) + 1,
              latitude: getRandomFloat(51,54).toFixed(2),
              longitude: getRandomFloat(15,23).toFixed(2),
              speed: Math.floor(Math.random() * (150 - 0 + 1) + 0),
              batteryStatus: Math.floor(Math.random() * (100 - 0 + 1) + 0),
              fuelLevel: Math.floor(Math.random() * (100 - 0 + 1) + 0),
              temperature: Math.floor(Math.random() * (35 - 5 + 1) - 5),
              
              MOPdistance: Math.floor(Math.random() * (20 - 1 + 1) + 1),
              numberOfPolice5km: Math.floor(Math.random() * (5 - 0 + 1) + 0),
              numberOfCostsOnWay: Math.floor(Math.random() * (5 - 0 + 1) + 0),
              roadTolls: Math.floor(Math.random() * (100 - 0 + 1) + 0),
              Time: new Date()
          };
          let wasAdded = eventDataBatch.tryAdd({ body: data });
          console.log(data);
          console.log(wasAdded);
          await producerClient.sendBatch(eventDataBatch);
          console.log("message sent successfully.");
      }, 2000);  
      await producerClient.close();
  }

  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  main().catch((err) => {
      console.log(err);
  });
