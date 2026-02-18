Now that we have setup linting on the project locally, lets get it working on our CI runner.

Assignment
Add a new step to the same "style" job that currently only checks for formatting issues. Run npm run lint after npm run format:check to make sure that formatting and linting issues are caught by our pipeline.

Commit and push your changes with the unused function to your branch with the open pull request. You should see your CI workflow fail since npm run lint will catch the unused function.

Once you've verified that your CI workflow fails, remove the unused function and commit and push your changes again. Your CI workflow should now pass!

Paste the URL of your GitHub repo into the box and run the GitHub checks.