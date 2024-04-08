SELECT p.race, p.gender, COUNT(*) AS patient_count
FROM main_table m
JOIN patient_info p ON m.patient_nbr = p.patient_nbr
JOIN admission_type_id ati ON m.admission_type_id = ati.admission_type_id
WHERE ati.descriptions = 'Elective'
GROUP BY p.race, p.gender
ORDER BY p.race, p.gender;
