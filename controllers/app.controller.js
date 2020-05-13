/*  Collection Models  */
const db = require("../models");
const Favorite = db.favorite;
const Group = db.group;
// const Hunt = db.hunt;
const Favorite = db.favorite;
const Org = db.org;
const Score = db.score;



/*  Create and Export createFavorite  */
exports.createFavorite = (req, res) => {
    const favorite = new Favorite({
        title: req.body.title,
        created_by: req.body.created_by,
        category: req.body.category,
        image_url: req.body.image_url,
        description: req.body.description,
        hunt_data: req.body.hunt_data,
        rating: req.body.rating,
        share: req.body.share
    });

    favorite.save((err, favorite) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            res.status(200).send({
                id: favorite._id,
                title: favorite.title,
                created_by: favorite.created_by,
                category: favorite.category,
                image_url: favorite.image_url,
                description: favorite.description,
                hunt_data: favorite.hunt_data,
                rating: favorite.rating,
                share: favorite.share
            });
        }
    });
};

/*  Create and Export createGroup  */
exports.createGroup = (req, res) => {
    const group = new Group({
        group_name: req.body.group_name,
        grade_level: req.body.grade_level,
        subject: req.body.subject,
        teacher_id: req.body.teacher_id,
        hunt_id: req.body.hunt_id,
        student_id: req.body.student_id
    });

    group.save((err, group) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            res.status(200).send({
                id: group_id,
                group_name: group.group_name,
                grade_level: group.grade_level,
                subject: group.subject,
                teacher_id: group.teacher_id,
                hunt_id: group.hunt_id,
                student_id: group.student_id
            });
        }
    });
};


/*  Create and Export CreateOrg  */
exports.createOrg = (req, res) => {
    const org = new Org({
        org_name: req.body.org_name,
        org_city: req.body.org_city,
        org_state: req.body.org_state
    });

    org.save((err, org) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            res.status(200).send({
                id: org._id,
                org_name: org.org_name,
                org_city: org.org_city,
                org_state: org.org_state
            });
        }
    });
};

/*  Create and Export CreateScore  */
exports.createScore = (req, res) => {
    const score = new Score({
        teacher_id: req.body.teacher_id,
        hunt_id: req.body.hunt_id,
        student_id: req.body.student_id,
        group_id: req.body.group_id,
        started: req.body.started,
        finished: req.body.finished,
        complete: req.body.complete,
        q_points: req.body.q_points,
        total: req.body.total
    });

    score.save((err, score) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            res.status(200).send({
                id: score._id,
                teacher_id: score.teacher_id,
                hunt_id: score.hunt_id,
                student_id: score.student_id,
                group_id: score.group_id,
                started: score.started,
                finished: score.finished,
                complete: score.complete,
                q_points: score.q_points,
                total: score.total
            });
        }
    });
};

// exports.createHunt = (req, res) => {
//     const Hunt = new Hunt({
//         teacher_id: req.body.teacher_id,
//         favorite_id: req.body.favorite_id,
//         title: req.body.title,
//         created_by: req.body.created_by,
//         category: req.body.category,
//         image_url: req.body.image_url,
//         description: req.body.description,
//         hunt_data: req.body.hunt_data,
//         status: req.body.status,
//         start_date: req.body.start_date,
//         end_date: req.body.end_date,
//         share: req.body.share
//     });

//     Hunt.save((err, hunt) => {
//         if (err) {
//             res.status(500).send({ message: err });
//             return;
//         } else {
//             res.status(200).send({
//                 id: hunt._id,
//                 teacher_id: hunt.teacher_id,
//                 favorite_id: hunt.favorite_id,
//                 title: hunt.title,
//                 created_by: hunt.created_by,
//                 category:hunt.category,
//                 image_url: hunt.image_url,
//                 description: hunt.description,
//                 hunt_data: hunt.hunt_data,
//                 status: hunt.status,
//                 start_date: hunt.start_date,
//                 end_date: hunt.end_date,
//                 share: hunt.share
//             });
//         }
//     });
// };