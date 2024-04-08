SELECT patient_info.race, admission_type_id.description, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_nbr = p.patient_nbr
JOIN admission_type_id ati ON m.admission_type_id = ati.admission_type_id
GROUP BY p.race, admission_type_id.description
ORDER BY admission_type_id.description, p.race;
