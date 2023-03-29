import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MyProvider } from './MyProvider';
import QuestionsPage from './pages/QuestionsPage';
import ResultsPage from './pages/ResultsPage';
import AddQuestionPage from './pages/AddQuestionPage';
import HomePage from './pages/HomePage';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <MyProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/questions/:id" component={QuestionsPage} />
          <Route path="/add-question" component={AddQuestionPage} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </MyProvider>
    </BrowserRouter>
  );
};

export default AppRouter;