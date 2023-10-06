pipeline {
    agent any 
    
    stages{
        // stage("Clone Code"){
        //     steps {
        //         echo "Cloning the code"
        //         git url:"https://github.com/LondheShubham153/django-notes-app.git", branch: "main"
        //     }
        // }
          stage("pull from github"){
            steps {
                echo "Pulling code"
                sh "sudo git pull origin main"
            }
        }
        stage("Build"){
            steps {
                echo "Building the image"
                sh "sudo docker-compose up -d --build"
            }
        }
        // stage("Push to Docker Hub"){
        //     steps {
        //         echo "Pushing the image to docker hub"
        //         withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
        //         sh "docker tag my-note-app ${env.dockerHubUser}/my-note-app:latest"
        //         sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
        //         sh "docker push ${env.dockerHubUser}/my-note-app:latest"
        //         }
        //     }
        // }
        stage("prune docker conatiner cache"){
            steps {
                echo "removing all cache"
                sh "sudo docker system prune -f --all"
                
            }
        }
    }
}