mongoDBpipelines = {
    "query1": [
        {
            $lookup: {
                from: "patient_info",
                localField: "patient_nbr",
                foreignField: "patient_nbr",
                as: "patient_info"
            }
        },
        {
            $unwind: "$patient_info"
        },
        {
            $group: {
                _id: "$patient_info.race",
                count: { $addToSet: "$patient_nbr" }
            }
        },
        {
            $project: {
                _id: 1,
                count: { $size: "$count" }
            }
        },
        {
            $group: {
                _id: null,
                totalPatients: { $sum: "$count" },
                races: { $push: { race: "$_id", count: "$count" } }
            }
        },
        {
            $project: {
                _id: 0,
                races: 1,
                totalPatients: 1
            }
        },
        {
            $unwind: "$races"
        },
        {
            $project: {
                race: "$races.race",
                count: "$races.count",
                percentage: { $multiply: [{ $divide: ["$races.count", "$totalPatients"] }, 100] }
            }
        },
        {
            $sort: { count: -1 }
        }
    ],
    "query2": [
        {
            $lookup: {
                from: "patient_info",
                localField: "patient_nbr",
                foreignField: "patient_nbr",
                as: "patient_info"
            }
        },
        {
            $unwind: "$patient_info"
        },
        {
            $group: {
                _id: "$patient_info.gender",
                count: { $addToSet: "$patient_nbr" }
            }
        },
        {
            $project: {
                _id: 1,
                count: { $size: "$count" }
            }
        },
        {
            $group: {
                _id: null,
                totalPatients: { $sum: "$count" },
                genders: { $push: { gender: "$_id", count: "$count" } }
            }
        },
        {
            $project: {
                _id: 0,
                genders: 1,
                totalPatients: 1
            }
        },
        {
            $unwind: "$genders"
        },
        {
            $project: {
                gender: "$genders.gender",
                count: "$genders.count",
                percentage: { $multiply: [{ $divide: ["$genders.count", "$totalPatients"] }, 100] }
            }
        },
        {
            $sort: { count: -1 }
        }
    ],
    "query3": [
        {
            $lookup: {
                from: "admission_type_id",
                localField: "admission_type_id",
                foreignField: "admission_type_id",
                as: "admission_type"
            }
        },
        {
            $unwind: "$admission_type"
        },
        {
            $lookup: {
                from: "patient_info",
                localField: "patient_nbr",
                foreignField: "patient_nbr",
                as: "patient_info"
            }
        },
        {
            $unwind: "$patient_info"
        },
        {
            $group: {
                _id: {
                    admission_type: "$admission_type.description",
                    race: "$patient_info.race"
                },
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                admission_type: "$_id.admission_type",
                race: "$_id.race",
                count: 1
            }
        },
        {
            $sort: { count: -1 }
        }
    ],
    "query4": [
        {
            $lookup: {
                from: "discharge_disposition_id",
                localField: "discharge_disposition_id",
                foreignField: "discharge_disposition_id",
                as: "discharge_disposition"
            }
        },
        {
            $unwind: "$discharge_disposition"
        },
        {
            $lookup: {
                from: "patient_info",
                localField: "patient_nbr",
                foreignField: "patient_nbr",
                as: "patient_info"
            }
        },
        {
            $unwind: "$patient_info"
        },
        {
            $group: {
                _id: {
                    discharge_disposition: "$discharge_disposition.description",
                    gender: "$patient_info.gender"
                },
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                discharge_disposition: "$_id.discharge_disposition",
                gender: "$_id.gender",
                count: 1
            }
        },
        {
            $sort: { count: -1 }
        }
    ],
    "query5": [
        {
            $lookup: {
                from: "admission_source_id",
                localField: "admission_source_id",
                foreignField: "admission_source_id",
                as: "admission_source"
            }
        },
        {
            $unwind: "$admission_source"
        },
        {
            $lookup: {
                from: "patient_info",
                localField: "patient_nbr",
                foreignField: "patient_nbr",
                as: "patient_info"
            }
        },
        {
            $unwind: "$patient_info"
        },
        {
            $group: {
                _id: {
                    admission_source: "$admission_source.description",
                    race: "$patient_info.race"
                },
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                admission_source: "$_id.admission_source",
                race: "$_id.race",
                count: 1
            }
        },
        {
            $sort: { count: -1 }
        }
    ],
    "query6": [
        {
            $lookup: {
                from: "admission_source_id",
                localField: "admission_source_id",
                foreignField: "admission_source_id",
                as: "admission_source"
            }
        },
        {
            $unwind: "$admission_source"
        },
        {
            $lookup: {
                from: "patient_info",
                localField: "patient_nbr",
                foreignField: "patient_nbr",
                as: "patient_info"
            }
        },
        {
            $unwind: "$patient_info"
        },
        {
            $group: {
                _id: {
                    admission_source: "$admission_source.description",
                    gender: "$patient_info.gender"
                },
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                admission_source: "$_id.admission_source",
                gender: "$_id.gender",
                count: 1
            }
        },
        {
            $sort: { count: -1 }
        }
    ],
    "query7": [
        {
            $match: {
                admission_type_id: 3 // Filter for elective admissions
            }
        },
        {
            $lookup: {
                from: "patient_info",
                localField: "patient_nbr",
                foreignField: "patient_nbr",
                as: "patient_info"
            }
        },
        {
            $unwind: "$patient_info"
        },
        {
            $group: {
                _id: {
                    race: "$patient_info.race",
                    gender: "$patient_info.gender"
                },
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                race: "$_id.race",
                gender: "$_id.gender",
                count: 1
            }
        },
        {
            $sort: { count: -1 }
        }
    ],
    "query8": [
        {
            $match: {
                admission_type_id: 1 // Filter for emergency room admissions
            }
        },
        {
            $lookup: {
                from: "discharge_disposition_id",
                localField: "discharge_disposition_id",
                foreignField: "discharge_disposition_id",
                as: "discharge_disposition"
            }
        },
        {
            $unwind: "$discharge_disposition"
        },
        {
            $lookup: {
                from: "patient_info",
                localField: "patient_nbr",
                foreignField: "patient_nbr",
                as: "patient_info"
            }
        },
        {
            $unwind: "$patient_info"
        },
        {
            $group: {
                _id: {
                    gender: "$patient_info.gender",
                    discharge_disposition: "$discharge_disposition.description"
                },
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                gender: "$_id.gender",
                discharge_disposition: "$_id.discharge_disposition",
                count: 1
            }
        },
        {
            $sort: { count: -1 }
        }
    ],
}

//somehow this line is crucial
module.exports = mongoDBpipelines;

