neo4jCyphers = {
    "query1": "MATCH (n) RETURN n  limit 2000",
    "query2": " MATCH (n:patient_info) RETURN n  limit 2000 " ,
    "query3":"MATCH (n:admission_source_id) RETURN n  limit 2000",
    "query4":"MATCH (n:patient_type) RETURN n  limit 2000",
    "query5":"MATCH (n:discharge_disposition_id) RETURN n limit 2000",
    "query6":"MATCH (n:main_table) RETURN n limit 2000",
    "query7":"MATCH (n:patient_info) RETURN n.race as race, n.gender as gender , count(n) as count order by race ,gender ",
    "query1":"MATCH (n:main_table) RETURN n  limit 2000"

}

module.exports = neo4jCyphers;