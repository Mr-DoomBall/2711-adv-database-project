SELECT patient_info.race, patient_info.gender, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_id = p.patient_id
JOIN admission_type_id ati ON m.admission_type_id = ati.admission_type_id
WHERE ati.description = 'Elective'
GROUP BY p.race, p.gender
ORDER BY p.race, p.gender;
