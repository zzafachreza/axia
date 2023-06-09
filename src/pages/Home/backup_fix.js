import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    Animated,
    ImageBackground,
    TouchableNativeFeedback,
    TouchableOpacity, Modal

} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import * as Progress from 'react-native-progress';
import { useIsFocused } from '@react-navigation/native';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements';


export default function Home({ navigation }) {

    const kemana = new Sound('kemana.mp3',
        Sound.MAIN_BUNDLE,
    ).release();

    const AUDIO_K = new Sound('k.mp3',
        Sound.MAIN_BUNDLE,
    ).release();

    const AUDIO_A = new Sound('a.mp3',
        Sound.MAIN_BUNDLE,
    ).release();
    const AUDIO_N = new Sound('n.mp3',
        Sound.MAIN_BUNDLE,
    ).release();
    const AUDIO_R = new Sound('r.mp3',
        Sound.MAIN_BUNDLE,
    ).release();
    const AUDIO_I = new Sound('i.mp3',
        Sound.MAIN_BUNDLE,
    ).release().play();

    const AUDIO_KIRI = new Sound('kiri.mp3',
        Sound.MAIN_BUNDLE,
    ).release();


    const AUDIO_KANAN = new Sound('kanan.mp3',
        Sound.MAIN_BUNDLE,
    ).release();

    const suaraHuruf = [
        'k.mp3',
        'a.mp3',
        'n.mp3',
        'a.mp3',
        'n.mp3'
    ]




    const canvasRef = useRef(null);

    const handleUndo = () => {
        canvasRef.current?.undo();
    };

    const handleClear = () => {
        canvasRef.current?.clear();
    };


    const textLogo = new Animated.Value(0);

    const bola = new Animated.Value(100);
    const kanan = new Animated.Value(0);
    const atas = new Animated.Value(0);
    const kiper_loncat1 = new Animated.Value(0);
    const kiper_loncat2 = new Animated.Value(0);
    const kiper_loncat3 = new Animated.Value(0);
    const kiper_loncat4 = new Animated.Value(1);
    const kiper_loncat5 = new Animated.Value(0);

    const MyCanvas = useRef();

    const animasi = (x, from, to, durasi) => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(x, {
                    toValue: from,
                    duration: durasi,
                    useNativeDriver: true
                }),
                Animated.timing(x, {
                    toValue: to,
                    duration: durasi,
                    useNativeDriver: true
                }),
            ]),
            {
                iterations: 1,
            },
        ).start();
    };


    const kiper_loncat = (x = 0, y = 0, z = 0, k = 1, j = 0) => {
        Animated.timing(kiper_loncat1, {
            toValue: x,
            duration: 800,
            useNativeDriver: true
        }).start();
        Animated.timing(kiper_loncat2, {
            toValue: y,
            duration: 1500,
            useNativeDriver: true
        }).start();
        Animated.timing(kiper_loncat3, {
            toValue: z,
            duration: 1200,
            useNativeDriver: true
        }).start();
        Animated.timing(kiper_loncat4, {
            toValue: k,
            duration: 1,
            useNativeDriver: true
        }).start();
        Animated.timing(kiper_loncat5, {
            toValue: j,
            duration: 1,
            useNativeDriver: true
        }).start();
    }


    const tendangKanan = () => {
        kiper_loncat(0, -20, 0, 0, 1)

        Animated.timing(bola, {
            toValue: 50,
            duration: 1200,
            useNativeDriver: false
        }).start();
        Animated.timing(kanan, {
            toValue: 180,
            duration: 1300,
            useNativeDriver: false
        }).start();
        Animated.timing(atas, {
            toValue: -200,
            duration: 800,
            useNativeDriver: false
        }).start();
    }

    const tendanganKiri = () => {

        kiper_loncat(-230, 20, 1, 0, 1)

        Animated.timing(bola, {
            toValue: 50,
            duration: 1500,
        }).start();
        Animated.timing(kanan, {
            toValue: -200,
            duration: 800,
        }).start();
        Animated.timing(atas, {
            toValue: -200,
            duration: 800,
        }).start();
    }

    const [open, setOpen] = useState(5000);
    const waktuHabis = () => {

        if (soal == 6 && (nilai + 1) == 6) {
            setNilai(nilai + 1);
            navigation.navigate('Menang');

        } else if (soal == 6 && (nilai + 1) != 6) {
            setNilai(nilai + 1);
            navigation.navigate('Gagal');

        } else {
            if (nilai > 0) {
                setNilai(nilai - 1);
            }
            navigation.navigate('TidakGoalKiri');
            setSoal(soal + 1);
        }
    }



    const tendanganMulai = () => {

        kiper_loncat(0, 0, 0, 1, 0)


        Animated.timing(bola, {
            toValue: 100,
            duration: 1000,
        }).start();
        Animated.timing(kanan, {
            toValue: 0,
            duration: 1300,
        }).start();
        Animated.timing(atas, {
            toValue: 0,
            duration: 800,
        }).start();
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const bukaModal = () => {
        setModalVisible(true);

    }

    const bukaModalKiri = () => {
        setModalVisible2(true);

    }

    const [jumlah, setJumlah] = useState(0);
    const [pilih, setPilih] = useState(0);

    const huruf = ['K', 'A', 'N', 'A', 'N'];

    const gambar = [
        require('../../assets/k.png'),
        require('../../assets/a.png'),
        require('../../assets/n.png'),
        require('../../assets/a.png'),
        require('../../assets/n.png'),

    ]

    const gambar2 = [
        require('../../assets/k.png'),
        require('../../assets/i.png'),
        require('../../assets/r.png'),
        require('../../assets/i.png'),
    ]


    const [soal, setSoal] = useState(1);
    const isFocus = useIsFocused();





    const bintang = [
        require('../../assets/b0.png'),
        require('../../assets/b1.png'),
        require('../../assets/b2.png'),
        require('../../assets/b3.png'),
        require('../../assets/b4.png'),
        require('../../assets/b5.png'),
        require('../../assets/b6.png')
    ]

    const [nilai, setNilai] = useState(0);



    const myimg = useRef();

    return (
        <ImageBackground

            source={require('../../assets/bghome.png')}
            style={{
                flex: 1,
                padding: 10,
            }}>

            <View style={{
                flex: 1,
                // backgroundColor: 'red',
                position: 'relative'

            }}>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image source={bintang[nilai]} style={{
                            width: 150,
                            height: 20,
                        }} />
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {/* <Image source={require('../../assets/waktu.gif')} style={{
              width: 20,
              height: 20,
            }} /> */}
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}><Text style={{
                        flex: 1,
                        fontFamily: fonts.primary.normal,
                        fontSize: 25,

                    }}>Tendangan Ke - {soal}</Text>
                        <TouchableOpacity onPress={() => navigation.replace('Splash')} style={{
                            paddingHorizontal: 10,
                            zIndex: 100
                        }}>
                            <Icon type='ionicon' name='home' size={20} />
                        </TouchableOpacity>
                    </View>
                </View>


                <Image source={require('../../assets/gawang.png')} style={{
                    width: windowWidth,
                    height: windowHeight / 1.5,
                }} />

                {/* <Image source={require('../../assets/kiper_kanan.png')} style={{
          width: windowWidth / 1.5,
          height: windowHeight / 1.3,
          left: windowWidth / 10,
          resizeMode: "contain",
          position: 'absolute'
        }} /> */}




                <Animated.Image source={require('../../assets/kiper.png')} style={{
                    opacity: kiper_loncat4,
                    width: windowWidth / 1.5,
                    height: windowHeight / 1.3,
                    left: soal % 2 != 0 ? windowWidth / 2.6 : 0,
                    right: soal % 2 == 0 ? windowWidth / 2.6 : 0,
                    resizeMode: "contain",
                    position: 'absolute',
                    transform: [
                        { translateX: kiper_loncat1 },
                        { translateY: kiper_loncat2 },
                        {
                            rotateZ: kiper_loncat3.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-80deg"]
                            })
                        }
                    ]
                }} />

                <Animated.Image source={require('../../assets/kiper_tangkap.png')} style={{
                    opacity: kiper_loncat5,
                    width: windowWidth / 1.5,
                    height: windowHeight / 1.3,
                    left: soal % 2 != 0 ? windowWidth / 2.6 : 0,
                    right: soal % 2 == 0 ? windowWidth / 2.6 : 0,
                    resizeMode: "contain",
                    position: 'absolute',
                    transform: [
                        { translateX: kiper_loncat1 },
                        { translateY: kiper_loncat2 },
                        {
                            rotateZ: kiper_loncat3.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-80deg"]
                            })
                        }
                    ]
                }} />


                {/* <Image source={require('../../assets/kiper_kiri.png')} style={{
          width: windowWidth / 1.5,
          height: windowHeight / 1.3,
          right: windowWidth / 10,
          resizeMode: "contain",
          position: 'absolute'
        }} /> */}
            </View>

            <View style={{
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1,
                    padding: 10,

                }}>
                    <TouchableOpacity onPress={() => {
                        bukaModalKiri();

                    }}>
                        <Image source={require('../../assets/panah_kiri.png')} style={{
                            height: 100,
                            width: '100%',
                            resizeMode: 'contain',
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    padding: 0,
                }}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('TidakGoalKanan')}>
                        <Animated.Image source={require('../../assets/bola.gif')} style={{
                            height: bola,
                            zIndex: 100,
                            width: '100%',
                            resizeMode: 'contain',
                            position: 'absolute',
                            transform: [
                                { translateX: kanan },
                                { translateY: atas },
                            ]
                        }} />
                    </TouchableNativeFeedback>
                </View>
                <View style={{
                    flex: 1,
                    padding: 10,

                }}>
                    <TouchableOpacity onPress={() => {
                        // tendangKanan();
                        bukaModal();
                    }}>
                        <Image source={require('../../assets/panah_kanan.png')} style={{
                            height: 100,
                            width: '100%',
                            resizeMode: 'contain',
                        }} />
                    </TouchableOpacity>
                </View>
            </View>


            {/* modal  Kanan */}

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setPilih(0);
                    setJumlah(0);
                    setModalVisible(!modalVisible);
                }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                    // backgroundColor: 'red'
                }}>
                    <Image source={require('../../assets/kanan.png')} style={{
                        width: windowHeight / 1.8,
                        height: 70,
                        resizeMode: 'contain'
                    }} />
                    <ImageBackground source={gambar[pilih]} style={{
                        width: windowHeight / 1.8,
                        height: windowHeight / 1.8,
                    }}>

                        <SketchCanvas

                            ref={MyCanvas}

                            onStrokeEnd={x => {



                                if (jumlah == 2 || pilih == 2 || pilih == 4) {



                                    setJumlah(0);
                                    if (pilih == 4) {
                                        MyCanvas.current.clear();
                                        setPilih(0)
                                        setModalVisible(false);
                                        // tendangKanan();
                                        AUDIO_N.play();
                                        setTimeout(() => {
                                            AUDIO_KANAN.play();

                                        }, 1000);

                                        setTimeout(() => {
                                            if (soal % 2 != 0) {



                                                if (soal == 6 && (nilai + 1) == 6) {
                                                    setNilai(nilai + 1);
                                                    navigation.navigate('Menang');

                                                } else if (soal == 6 && (nilai + 1) != 6) {
                                                    setNilai(nilai + 1);
                                                    navigation.navigate('Gagal');

                                                } else {
                                                    if (nilai > 0) {
                                                        setNilai(nilai - 1);
                                                    }
                                                    navigation.navigate('TidakGoalKanan');
                                                    setSoal(soal + 1)
                                                }


                                            } else {


                                                if (soal == 6 && (nilai + 1) == 6) {
                                                    setNilai(nilai + 1);
                                                    navigation.navigate('Menang');

                                                } else if (soal == 6 && (nilai + 1) != 6) {
                                                    setNilai(nilai + 1);
                                                    navigation.navigate('Gagal');

                                                } else {
                                                    setNilai(nilai + 1);

                                                    navigation.navigate('GoalKanan');
                                                    setSoal(soal + 1)

                                                }
                                            }

                                        }, 2000)

                                    } else {
                                        MyCanvas.current.clear();
                                        if (pilih == 0) {
                                            const HK = new Sound('k.mp3', Sound.MAIN_BUNDLE, (error) => {
                                                if (error) {
                                                    console.log('error', error);
                                                    return;
                                                }
                                                HK.play();
                                            });
                                        } else if (pilih == 1) {
                                            AUDIO_A.play();
                                        } else if (pilih == 2) {
                                            AUDIO_N.play();
                                        } else if (pilih == 3) {
                                            AUDIO_A.play();
                                        }
                                        setPilih(pilih + 1)
                                    }


                                } else {


                                    setJumlah(jumlah + 1);
                                }
                            }}
                            style={{ flex: 1 }}
                            strokeColor={'#012646'}
                            strokeWidth={20}
                        />
                    </ImageBackground>
                </View>
            </Modal>

            {/* kiri */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    setPilih(0);
                    setJumlah(0);
                    // Alert.alert('Modal has been closed.');
                    setModalVisible2(!modalVisible2);
                }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                    // backgroundColor: 'red'
                }}>
                    <Image source={require('../../assets/kiri.png')} style={{
                        width: windowHeight / 1.8,
                        height: 70,
                        resizeMode: 'contain'
                    }} />
                    <ImageBackground source={gambar2[pilih]} style={{
                        width: windowHeight / 1.8,
                        height: windowHeight / 1.8,
                    }}>

                        <SketchCanvas

                            ref={MyCanvas}

                            onStrokeEnd={x => {


                                if (jumlah == 2 || pilih == 1 || pilih == 3) {



                                    MyCanvas.current.clear();
                                    setJumlah(0);
                                    if (pilih == 3) {
                                        setPilih(0)
                                        AUDIO_I.play();
                                        setModalVisible2(false);
                                        setTimeout(() => {
                                            AUDIO_KIRI.play();

                                        }, 1000);




                                        setTimeout(() => {

                                            if (soal % 2 != 0) {

                                                if (soal == 6 && (nilai + 1) == 6) {
                                                    setNilai(nilai + 1);
                                                    navigation.navigate('Menang');

                                                } else if (soal == 6 && (nilai + 1) != 6) {
                                                    setNilai(nilai + 1);
                                                    navigation.navigate('Gagal');

                                                } else {
                                                    setNilai(nilai + 1);
                                                    navigation.navigate('GoalKiri');
                                                    setSoal(soal + 1);
                                                }


                                            } else {


                                                if (soal == 6 && (nilai + 1) == 6) {
                                                    setNilai(nilai + 1);
                                                    navigation.navigate('Menang');

                                                } else if (soal == 6 && (nilai + 1) != 6) {
                                                    setNilai(nilai + 1);
                                                    navigation.navigate('Gagal');

                                                } else {

                                                    if (nilai > 0) {
                                                        setNilai(nilai - 1);
                                                    }
                                                    navigation.navigate('TidakGoalKiri');
                                                    setSoal(soal + 1)

                                                }
                                            }
                                        }, 2000)



                                        MyCanvas.current.clear();
                                    } else {

                                        if (pilih == 0) {
                                            const HK = new Sound('k.mp3', Sound.MAIN_BUNDLE, (error) => {
                                                if (error) {
                                                    console.log('error', error);
                                                    return;
                                                }
                                                HK.play();
                                            });
                                        } else if (pilih == 1) {
                                            AUDIO_I.play();
                                        } else if (pilih == 2) {
                                            AUDIO_R.play();
                                        }
                                        setPilih(pilih + 1)
                                    }


                                } else {

                                    setJumlah(jumlah + 1);
                                }
                            }}
                            style={{ flex: 1 }}
                            strokeColor={'#012646'}
                            strokeWidth={20}
                        />
                    </ImageBackground>
                </View>
            </Modal>

        </ImageBackground >
    );
}

const styles = StyleSheet.create({});
