SELECT patient_info.gender, asi.description, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_nbr = p.patient_nbr
JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
GROUP BY p.gender, asi.description
ORDER BY asi.description, p.gender;
