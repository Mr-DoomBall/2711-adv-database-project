SELECT p.race, ati.descriptions, COUNT(*) AS patient_count
FROM main_table m
JOIN patient_info p ON m.patient_nbr = p.patient_nbr
JOIN admission_type_id ati ON m.admission_type_id = ati.admission_type_id
GROUP BY p.race, ati.descriptions
ORDER BY ati.descriptions, p.race;
