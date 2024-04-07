SELECT p.race, ati.admission_type_name, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_id = p.patient_id
JOIN admission_type_id ati ON m.admission_type_id = ati.admission_type_id
GROUP BY p.race, ati.admission_type_name
ORDER BY ati.admission_type_name, p.race;
