SELECT 
    SUM(CASE WHEN gender = 'Male' THEN 1 ELSE 0 END) AS male_count,
    SUM(CASE WHEN gender = 'Female' THEN 1 ELSE 0 END) AS female_count,
    SUM(CASE WHEN gender = 'Male' THEN 1 ELSE 0 END) * 1.0 / 
    SUM(CASE WHEN gender = 'Female' THEN 1 ELSE 0 END) AS male_to_female_ratio
FROM 
    patient_info;
