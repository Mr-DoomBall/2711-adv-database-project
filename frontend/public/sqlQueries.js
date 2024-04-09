sqlQueries = {
    "query1": 
        `SELECT 
            race, 
            COUNT(*) AS race_count, 
            (COUNT(*) * 100.0 / (SELECT COUNT(*) FROM patient_info)) AS race_percentage
        FROM 
            patient_info
        GROUP BY 
            race;
        `,
    "query2":
        `SELECT 
            SUM(CASE WHEN gender = 'Male' THEN 1 ELSE 0 END) AS male_count,
            SUM(CASE WHEN gender = 'Female' THEN 1 ELSE 0 END) AS female_count,
            SUM(CASE WHEN gender = 'Male' THEN 1 ELSE 0 END) * 1.0 / 
            SUM(CASE WHEN gender = 'Female' THEN 1 ELSE 0 END) AS male_to_female_ratio
        FROM 
            patient_info;
        `,
    "query3": 
        `SELECT p.race, ati.descriptions, COUNT(*) AS patient_count
            FROM main_table m
            JOIN patient_info p ON m.patient_nbr = p.patient_nbr
            JOIN admission_type_id ati ON m.admission_type_id = ati.admission_type_id
            GROUP BY p.race, ati.descriptions
            ORDER BY ati.descriptions, p.race;
        `,
    "query4": 
        `SELECT p.gender, ddi.descriptions, COUNT(*) AS patient_count
        FROM main_table m
        JOIN patient_info p ON m.patient_nbr = p.patient_nbr
        JOIN discharge_disposition_id ddi ON m.discharge_disposition_id = ddi.discharge_disposition_id
        GROUP BY p.gender, ddi.descriptions
        ORDER BY ddi.descriptions, p.gender;
        `,
    "query5": 
        `SELECT p.race, asi.descriptions, COUNT(*) AS patient_count
        FROM main_table m
        JOIN patient_info p ON m.patient_nbr = p.patient_nbr
        JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
        WHERE asi.admission_source_id IN (1, 2, 7)
        GROUP BY p.race, asi.descriptions
        ORDER BY asi.descriptions, p.race;
        `,
    "query6": 
        `SELECT p.gender, asi.descriptions, COUNT(*) AS patient_count
        FROM main_table m
        JOIN patient_info p ON m.patient_nbr = p.patient_nbr
        JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
        GROUP BY p.gender, asi.descriptions
        ORDER BY asi.descriptions, p.gender;
        `,
    "query7": 
        `SELECT p.race, p.gender, COUNT(*) AS patient_count
        FROM main_table m
        JOIN patient_info p ON m.patient_nbr = p.patient_nbr
        JOIN admission_type_id ati ON m.admission_type_id = ati.admission_type_id
        WHERE ati.admission_type_id = 3
        GROUP BY p.race, p.gender
        ORDER BY p.race, p.gender;
        `,
    "query8": 
        `SELECT p.gender, ddi.descriptions, COUNT(*) AS patient_count
        FROM main_table m
        JOIN patient_info p ON m.patient_nbr = p.patient_nbr
        JOIN admission_source_id asi ON m.admission_source_id = asi.admission_source_id
        JOIN discharge_disposition_id ddi ON m.discharge_disposition_id = ddi.discharge_disposition_id
        WHERE asi.admission_source_id = 7
        GROUP BY p.gender, ddi.descriptions
        ORDER BY p.gender, ddi.descriptions;
        `,
}