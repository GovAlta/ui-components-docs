import { GoabSideMenu, GoabSideMenuGroup, GoabSpacer } from "@abgov/react-components";
import {Link, Outlet} from "react-router-dom";
import {SupportInfo} from "@components/support-info/SupportInfo.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";
import { getVersionedUrlPath } from "@components/version-language-switcher/version-language-constants.ts";

export default function ExamplesLayout() {
  const {language, version} = useContext(LanguageVersionContext);
  getVersionedUrlPath(version, language);

  return (
    <div className="content">
      <section className="side-menu">
        <GoabSideMenu>
          <GoabSpacer vSpacing="m"></GoabSpacer>
          <Link to="">All</Link>
          <GoabSideMenuGroup heading="Form pattern">
            <Link to="public-form">Overview</Link>
            <Link to="start-page">Start page</Link>
            <Link to="task-list-page">Task list page</Link>
            <Link to="question-page">Question page</Link>
            <Link to="review-page">Review page</Link>
            <Link to="result-page">Result page</Link>
          </GoabSideMenuGroup>
          <Link to="basic-page-layout">Basic layout</Link>
          {/*
          <GoabSideMenuGroup heading="Tasks">
            <Link to="approve-or-reject-a-submission">Approve or reject a submission</Link>
            <Link to="assign-a-case-or-task">Assign a case or task</Link>
            <Link to="check-application-status">Check application status</Link>
            <Link to="check-eligibility">Check eligibility</Link>
            <Link to="filter-and-refine-search-results">Filter and refine search results</Link>
            <Link to="generate-or-download-a-PDF-or-certificate">Generate or download a PDF or certificate</Link>
            <Link to="onboarding-for-new users-or-features">Onboarding for new users or features</Link>
            <Link to="pay-a-fee-or-complete-payment">Pay a fee or complete payment</Link>
            <Link to="provide-feedback-or-comments">Provide feedback or comments</Link>
            <Link to="review-revise-and-resubmit">Review, Revise, and Resubmit</Link>
            <Link to="schedule-a-task-or-appoinement">Schedule a task or appointment</Link>
            <Link to="search-for-a-record">Search for a record</Link>
            <Link to="update-personal-information">Update personal information</Link>
          </GoabSideMenuGroup>

          <GoabSideMenuGroup heading="Interactions">
            <Link to="public-form">A</Link>
            <Link to="public-form">B</Link>
            <Link to="public-form">C</Link>
            <Link to="public-form">D</Link>
            <Link to="public-form">E</Link>
          </GoabSideMenuGroup>


          <GoabSideMenuGroup heading="How to">
            <Link to="public-form">Upgrade to the latest component version</Link>
            <Link to="public-form">Generate a review page from branch form questions</Link>
          </GoabSideMenuGroup>
          */}
        </GoabSideMenu>
      </section>
      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}
