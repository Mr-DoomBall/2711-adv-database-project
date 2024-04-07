SELECT p.gender, asi.admission_source_name, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_id = p.patient_id
JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
GROUP BY p.gender, asi.admission_source_name
ORDER BY asi.admission_source_name, p.gender;
