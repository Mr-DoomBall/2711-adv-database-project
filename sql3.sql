SELECT patient_info.race, admission_source_id.description, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_nbr = p.patient_nbr
JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
WHERE asi.description IN ('Physician Referral', 'Clinic Referral', 'Emergency Room')
GROUP BY p.race, asi.description
ORDER BY asi.description, p.race;
