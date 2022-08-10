const Kafka = require('no-kafka');

// Create an instance of the Kafka consumer
const consumer = new Kafka.SimpleConsumer({"connectionString":"127.0.0.1:9092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        var value = parseInt(m.message.value.toString('utf8'));
        console.log(value);
    });
};

// Subscribe to the Kafka topic
return consumer.init().then(function () {
    return consumer.subscribe('klevents', data);
    // return consumer.subscribe('klevents', 0, {time: Kafka.EARLIEST_OFFSET}, data);
});