SELECT p.gender, ddi.discharge_disposition_name, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_id = p.patient_id
JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
JOIN discharge_disposition_id ddi ON m.discharge_disposition_id = ddi.discharge_disposition_id
WHERE asi.admission_source_name = 'Emergency Room'
GROUP BY p.gender, ddi.discharge_disposition_name
ORDER BY p.gender, ddi.discharge_disposition_name;
