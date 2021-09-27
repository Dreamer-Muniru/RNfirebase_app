import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.profile_section}>
                <View style={styles.pics}>
                    <Image style={styles.profile_pic} source={require("../assets/profile.jpg")} />
                </View>
                <View style={styles.profile_name}>
                    <Text style={styles.name}>Muniru Dreamer</Text>
                    <Text style={styles.time}>2hr</Text>
                </View>
            </View>
                <View style={styles.profile_caption}>
                    <Text>
                        People like me don't have people. We are the people that people have.
                    </Text>
                    <Image style={styles.post_pic}  source={require("../assets/post.jpg")} />
                </View>
                <View style={styles.icons}>
                    <Text><Icon name="rocket" size={20} color="grey" /> Likes</Text>
                    <Text> <Icon name="comments" size={20} color="grey" /> Comments</Text>
                    <Text> <Icon name="send" size={20} color="grey" /> Send</Text>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: "90%",
        marginHorizontal: 20,
        marginTop: 20
    },
    profile_pic:{
        width: 50,
        height: 50,
        borderRadius:100
    },
    profile_section:{
        display: 'flex',
        flexDirection: 'row'
    },

    profile_name:{
        marginTop: 0,
        marginLeft: 10
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18
    
    },
    post_pic:{
        width: '100%',
        borderRadius: 5,
        height: 300,
        resizeMode: 'cover'

    },
    profile_caption:{
      
    },

    icons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        borderRadius: 10
    }

})

