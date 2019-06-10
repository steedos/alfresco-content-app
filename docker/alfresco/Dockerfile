FROM alfresco/alfresco-content-repository-community:6.1.2-ga

ARG TOMCAT_DIR=/usr/local/tomcat

RUN yum install -y google-noto-sans-cjk-fonts 

COPY *.amp ${TOMCAT_DIR}/amps/
# Install amps on alfresco.war
RUN java -jar ${TOMCAT_DIR}/alfresco-mmt/alfresco-mmt*.jar install \
              ${TOMCAT_DIR}/amps/alfresco-s3-adapter-* ${TOMCAT_DIR}/webapps/alfresco -nobackup -force

COPY alfresco-s3-adapter-platform/ ${TOMCAT_DIR}/webapps/alfresco/WEB-INF/classes/alfresco/module/alfresco-s3-adapter-platform/
COPY alfresco-s3-adapter-platform/context/ ${TOMCAT_DIR}/webapps/alfresco/WEB-INF/classes/alfresco/module/alfresco-s3-adapter-platform/context/