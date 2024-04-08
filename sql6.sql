SELECT p.gender, ddi.descriptions, COUNT(*) AS patient_count
FROM main_table m
JOIN patient_info p ON m.patient_nbr = p.patient_nbr
JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
JOIN discharge_disposition_id ddi ON m.discharge_disposition_id = ddi.discharge_disposition_id
WHERE asi.admission_source_id = 7
GROUP BY p.gender, ddi.descriptions
ORDER BY p.gender, ddi.descriptions;
