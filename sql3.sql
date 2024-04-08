SELECT p.race, asi.descriptions, COUNT(*) AS patient_count
FROM main_table m
JOIN patient_info p ON m.patient_nbr = p.patient_nbr
JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
WHERE asi.admission_source_id IN (1, 2, 7)
GROUP BY p.race, asi.descriptions
ORDER BY asi.descriptions, p.race;
