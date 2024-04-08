SELECT 
    race, 
    COUNT(*) AS race_count, 
    (COUNT(*) * 100.0 / (SELECT COUNT(*) FROM patient_info)) AS race_percentage
FROM 
    patient_info
GROUP BY 
    race;
