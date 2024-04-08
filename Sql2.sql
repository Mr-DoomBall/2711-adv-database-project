SELECT patient_info.gender, discharge_disposition_id.description, COUNT(*) AS patient_count
FROM main m
JOIN patient p ON m.patient_nbr = p.patient_nbr
JOIN discharge_disposition_id ddi ON m.discharge_disposition_id = ddi.discharge_disposition_id
GROUP BY p.gender, ddi.description
ORDER BY ddi.description, p.gender;
