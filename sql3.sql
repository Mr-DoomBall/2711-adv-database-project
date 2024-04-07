SELECT p.race, asi.admission_source_name, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_id = p.patient_id
JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
WHERE asi.admission_source_name IN ('Physician Referral', 'Clinic Referral', 'Emergency Room')
GROUP BY p.race, asi.admission_source_name
ORDER BY asi.admission_source_name, p.race;
