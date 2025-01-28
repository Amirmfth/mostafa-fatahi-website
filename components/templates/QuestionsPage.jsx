"use client";

import axios from "axios";
import moment from "moment-jalaali";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const getQuestions = async () => {
    const questions = await axios.get("/api/questions");
    setQuestions(questions.data.data);
    return questions.data;
  };
  useEffect(() => {
    getQuestions();
  }, []);

  // handlers
  const handleQuestionSubmit = async () => {
    try {
      const response = await axios.post("/api/questions", {
        name,
        question,
      });
      toast.success("پرسش شما با موفقیت ثبت شد");
      getQuestions();
      setName("");
      setQuestion("");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleAdminCodeSubmit = async () => {
    try {
      const response = await axios.post("/api/auth/jwt/generate", {
        adminCode,
        role: "admin",
      });
      toast.success("کد امنیتی با موفقیت ثبت شد");
      setAdminCode("");
    } catch (error) {
      toast.error("کد امنیتی معتبر نیست");
      setAdminCode("");
    }
    setModalOpen(false);
  };

  return (
    <div
      className="flex flex-col pt-16 min-h-screen md:pt-40 bg-gradient-to-br from-blue-500  to-blue-200 "
      // style={{ backgroundImage: "url('/assets/images/banner-bg.png'" }}
    >
      {questions.map((question) => (
        <QuestionBox
          key={question._id}
          question={question}
          answer={answer}
          setAnswer={setAnswer}
          getQuestions={getQuestions}
          setModalOpen={setModalOpen}
        />
      ))}
      <div className="flex flex-col p-5 m-2 mt-10 rounded-md bg-gray-200 bg-opacity-70 h-fit">
        <h3 className="px-4 text-2xl font-bold">ثبت پرسش:</h3>
        <div className="w-full flex flex-col py-3 rounded-lg  space-y-2 ">
          <textarea
            className="md:w-1/2 rounded-lg p-2"
            name="question"
            id="question"
            rows="5"
            placeholder="پرسش خود را اینجا مطرح کنید"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <input
            type="text"
            className="md:w-1/2 rounded-lg p-2"
            placeholder="نام و نام خانوادگی"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleQuestionSubmit}
            className="bg-dark-green text-white text-xl font-semibold rounded-lg p-2 w-1/2 hover:scale-105 duration-150"
          >
            ثبت پرسش
          </button>
        </div>
      </div>
      <div
        className={`${
          modalOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10`}
        id="modal"
      >
        <div className="flex items-center justify-center h-full">
          <div className="bg-gray-200 rounded-lg p-5">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">کد ادمین را وارد کنید:</h2>
              <input
                type="password"
                className="w-full rounded-lg p-2 my-3"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
              />
              <div className="w-full flex flex-row space-x-4 space-x-reverse">
                <button
                  className="bg-red-600 text-white text-xl font-semibold rounded-lg p-2 mt-5 "
                  onClick={() => setModalOpen(false)}
                >
                  بستن
                </button>
                <button
                  onClick={handleAdminCodeSubmit}
                  className="bg-dark-green text-white text-xl font-semibold rounded-lg p-2 mt-5"
                >
                  تایید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;

function QuestionBox(props) {
  const { question, answer, setAnswer, getQuestions, setModalOpen } = props;
  const [answerMode, setAnswerMode] = useState(false);

  // handlers
  const handleQuestionDelete = async (id) => {
    try {
      const isTokenValid = await axios
        .post("/api/auth/jwt/verify")
        .then((res) => res.data.valid);

      if (!isTokenValid) {
        setModalOpen(true);
        return;
      }
    } catch (error) {
      setModalOpen(true);
      return;
    }

    if (!confirm("آیا مطمئنید؟")) return;
    try {
      const response = await axios.delete(`/api/questions/${id}`);
      toast.success("پرسش شما با موفقیت حذف شد");
      getQuestions();
    } catch (error) {
      toast.error(error);
    }
  };

  const handleQuestionAnswer = async (id) => {
    try {
      const isTokenValid = await axios
        .post("/api/auth/jwt/verify")
        .then((res) => res.data.valid);

      if (!isTokenValid) {
        setModalOpen(true);
        return;
      }
    } catch (error) {
      setModalOpen(true);
      return;
    }

    try {
      const response = await axios.patch(`/api/questions/${id}`, {
        answer,
      });
      toast.success("پاسخ شما با موفقیت ثبت شد");
      getQuestions();
      setAnswerMode(false);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-between m-2 p-3 space-y-6 rounded-md bg-gray-200 bg-opacity-70 ">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="text-2xl text-dark-green font-bold">{question.name}</p>
          <div>
            <button
              onClick={() => handleQuestionDelete(question._id)}
              className="ml-3 p-1 bg-red-500 text-sm text-white rounded-lg "
            >
              حذف
            </button>
            <span>
              {moment(question.createdAt).locale("fa").format("jYYYY/jMM/jDD")}
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <p className="text-lg text-slate-900">{question.question}</p>
          {!question.answer && (
            <button
              onClick={() => setAnswerMode(true)}
              className="mr-6 bg-dark-green text-white text-lg rounded-lg p-1 hover:scale-105 duration-150"
            >
              ثبت پاسخ
            </button>
          )}
        </div>
        {answerMode && (
          <div>
            <input
              type="text"
              className="md:w-1/2 rounded-lg p-2 my-4"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <div>
              <button
                className="px-3 bg-green-800 text-white rounded-lg p-1"
                onClick={() => handleQuestionAnswer(question._id)}
              >
                ثبت
              </button>
              <button
                className="mr-3 p-1 bg-red-500  text-white rounded-lg"
                onClick={() => setAnswerMode(false)}
              >
                انصراف
              </button>
            </div>
          </div>
        )}
      </div>
      {question.answer && (
        <div className="flex flex-col justify-between bg-white rounded-md p-3">
          <p className="text-lg text-blue-700 font-bold">کارشناس مصطفی فتاحی</p>
          <p className="text-lg">{question.answer}</p>
        </div>
      )}
    </div>
  );
}
