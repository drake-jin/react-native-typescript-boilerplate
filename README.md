# react-native-typescript-boilerplate

react-natvie... 설정.. 너모너모 힘둘다..


# based on this post

https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native

# 버전관리

- **Version 0.0.1**: react-native(react 16.6.1 + react-native 0.57.5) + typescript

# 이용방법

``` bash
git clone https://github.com/drake-jin/react-native-typescript-boilerplate.git ${project_name}
cd ${project_name}
rm -rf .git

git init
git remote add origin ${project_git_remote_url}
# Have to edit README.md file.
git add .
git commit -m "initialize commit"
git push origin master
```

# 실행방법

``` bash
npm install
npm start

# open other terminal
npm run android
npm run ios
```

# 참고문서
- [타입스크립트 추가한 가이드라인 문서](https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native)
- [typescript에서 src디렉토리를 상위 루트 디렉토리로 참고한 문서](https://github.com/ds300/react-native-typescript-transformer/issues/56)