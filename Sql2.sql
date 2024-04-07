SELECT p.gender, ddi.discharge_disposition_name, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_id = p.patient_id
JOIN discharge_disposition_id ddi ON m.discharge_disposition_id = ddi.discharge_disposition_id
GROUP BY p.gender, ddi.discharge_disposition_name
ORDER BY ddi.discharge_disposition_name, p.gender;
