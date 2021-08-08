

// @desc     Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access    Public 

exports.getbootcamps = (req,res,next) => {
    res.status(200).json({success:true, msg: "show all bootcamps" , hello: req.hello });
}

// @desc     Get  single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access    Public 

exports.getbootcamp = (req,res,next) => {
    res.status(200).json({success:true, msg: `get with id bootcamp ${req.params.id}` });
}

// @desc     Create new bootcamps
// @route    POST /api/v1/bootcamps/
// @access   Private

exports.createBootcamp = (req,res,next) => {
    res.status(200).json({success:true, msg: "create new Bootcamps" });
  
}

// @desc      update bootcamps
// @route     PUT /api/v1/bootcamps/
// @access    Private

exports.updateBootcamp = (req,res,next) => {
    res
    .status(200)
    .json({success:true, msg: `update bootcamp ${req.params.id}` });
}

// @desc     delete new bootcamps
// @route    DELTEE /api/v1/bootcamps/:id
// @access   Private

exports.deleteBootcamp = (req,res,next) => {
    res.status(200).json({success:true, msg: `Delete bootcamp ${req.params.id}` });
  
}