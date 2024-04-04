To load the neo4j database from backup:
1. go into your neo4j installation directory: $NEO4J_HOME/bin, open in terminal
2. command:
neo4j-admin database load --expand-commands neo4j --from-path=/backups(your backup path)

ref: 
https://neo4j.com/docs/operations-manual/current/kubernetes/operations/dump-load/
https://www.cnblogs.com/yanglei2022/p/16778636.html