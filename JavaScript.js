// تحديث النقاط عند الإجابة الصحيحة
app.post('/api/answer', auth, async (req,res)=>{
  const { questionId, answer } = req.body;
  const question = await Question.findById(questionId);
  if(!question) return res.status(400).json({error:"السؤال غير موجود"});

  let correct = false;
  if(question.answer === answer){
    correct = true;
    // تحديث نقاط المستخدم
    const user = await User.findById(req.user.id);
    user.points += 1;
    await user.save();

    // تحديث نقاط الفريق إن وجد
    if(user.team){
      const team = await Team.findById(user.team);
      team.points += 1;
      await team.save();
    }
  }
  res.json({correct});
});
// تحديث النقاط عند الإجابة الصحيحة
app.post('/api/answer', auth, async (req,res)=>{
  const { questionId, answer } = req.body;
  const question = await Question.findById(questionId);
  if(!question) return res.status(400).json({error:"السؤال غير موجود"});

  let correct = false;
  if(question.answer === answer){
    correct = true;
    
  // تحديث النقاط عند الإجابة الصحيحة
app.post('/api/answer', auth, async (req,res)=>{
  const { questionId, answer } = req.body;
  const question = await Question.findById(questionId);
  if(!question) return res.status(400).json({error:"السؤال غير موجود"});

  let correct = false;
  if(question.answer === answer){
    correct = true;
    // تحديث نقاط المستخدم
    const user = await User.findById(req.user.id);
    user.points += 1;
    await user.save();

    // تحديث نقاط الفريق إن وجد
    if(user.team){
      const team = await Team.findById(user.team);
      team.points += 1;
      await team.save();
    }
  }
  res.json({correct});
}); 
    // تحديث نقاط المستخدم
    
    const user = await User.findById(req.user.id);
    user.points += 1;
    await user.save();

    // تحديث نقاط الفريق إن وجد
    if(user.team){
      const team = await Team.findById(user.team);
      team.points += 1;
      await team.save();
    }
  }
  res.json({correct});
});

