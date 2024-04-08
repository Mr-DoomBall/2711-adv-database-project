SELECT patient_info.gender, discharge_disposition_id.description, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_nbr = p.patient_nbr
JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
JOIN discharge_disposition_id ddi ON m.discharge_disposition_id = ddi.discharge_disposition_id
WHERE asi.description = 'Emergency Room'
GROUP BY p.gender, discharge_disposition_id.description
ORDER BY p.gender, discharge_disposition_id.description;
