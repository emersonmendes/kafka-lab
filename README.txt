
# Creating topic

docker-compose exec kl_kafka kafka-topics --create --topic klevents --partitions 1 --replication-factor 1 --if-not-exists --bootstrap-server localhost:9092

# Check toptic

docker-compose exec kl_kafka kafka-topics --describe --topic klevents --bootstrap-server localhost:9092

# Message

docker-compose exec kl_kafka bash -c "seq 100 | kafka-console-producer --request-required-acks 1 --broker-list localhost:29092 --topic klevents && echo 'Produced 100 messages.'"