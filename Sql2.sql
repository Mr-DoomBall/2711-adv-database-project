SELECT p.gender, ddi.descriptions, COUNT(*) AS patient_count
FROM main_table m
JOIN patient_info p ON m.patient_nbr = p.patient_nbr
JOIN discharge_disposition_id ddi ON m.discharge_disposition_id = ddi.discharge_disposition_id
GROUP BY p.gender, ddi.descriptions
ORDER BY ddi.descriptions, p.gender;
