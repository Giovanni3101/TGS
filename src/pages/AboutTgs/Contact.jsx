import React, { useState } from 'react';
import { Typography, Card, Row, Col, Form, Input, Button, message, Divider} from 'antd';
import {
    Mail,
    Phone,
    Clock,
    Send,
    MapPin,
    MessageCircle,
    User,
    FileText
} from 'lucide-react';
import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined,
    FacebookOutlined,
    TwitterOutlined,
    LinkedinOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Form values:', values);
            message.success('Your message has been sent successfully! We will get back to you soon.');
            form.resetFields();
        } catch (error) {
            message.error('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <Title level={2} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Get in Touch
                    </Title>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Ready to collaborate, partner, or invite us to speak? Want to support our work or have an inquiry?
                        Get in touch with us! We're always excited to connect with like-minded individuals and organizations.
                    </Paragraph>
                </div>

                <Row gutter={[48, 32]}>
                    {/* Contact Form */}
                    <Col xs={24} lg={14}>
                        <Card
                            className="shadow-xl border-0 bg-white/90 backdrop-blur-sm"
                            style={{ padding: '2.5rem' }}
                        >
                            <div className="flex items-center mb-8">
                                <MessageCircle className="w-8 h-8  mr-3 " style={{  color: '#131a4eff'}}/>
                                <Title level={3} className="text-2xl font-bold text-gray-900 mb-0" style={{ fontFamily: "'Raleway', sans-serif" }} >
                                    Send us a message
                                </Title>
                            </div>

                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                className="contact-form"
                            >
                                <Row gutter={[16, 0]}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="fullName"
                                            label={
                                                <span className="text-gray-700 font-semibold flex items-center" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                                    <User className="w-4 h-4 mr-2" />
                                                    Full Name
                                                </span>
                                            }
                                            rules={[{ required: true, message: 'Please enter your full name' }]}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your full name"
                                                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="email"
                                            label={
                                                <span className="text-gray-700 font-semibold flex items-center" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                                    <Mail className="w-4 h-4 mr-2" />
                                                    Email Address
                                                </span>
                                            }
                                            rules={[
                                                { required: true, message: 'Please enter your email' },
                                                { type: 'email', message: 'Please enter a valid email' }
                                            ]}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your email address"
                                                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item
                                    name="subject"
                                    label={
                                        <span className="text-gray-700 font-semibold flex items-center" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                            <FileText className="w-4 h-4 mr-2" />
                                            SUBJECT
                                        </span>
                                    }
                                    rules={[{ required: true, message: 'Please enter a subject' }]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="What is this regarding?"
                                        className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="message"
                                    label={
                                        <span className="text-gray-700 font-semibold">
                                            Message: Describe your projects or needs.
                                        </span>
                                    }
                                    rules={[{ required: true, message: 'Please enter your message' }]}
                                >
                                    <TextArea
                                        rows={6}
                                        placeholder="Tell us about your project, collaboration idea, or inquiry. We'd love to hear from you!"
                                        className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 resize-none"
                                        style={{ fontFamily: "'Raleway', sans-serif" }}
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        loading={loading}
                                        style={{  backgroundColor: '#131a4eff', fontFamily: "'Raleway', sans-serif" }}
                                        className="w-full hover:bg-blue-700 border-none rounded-lg py-4 h-auto text-lg font-semibold flex items-center justify-center"
                                        
                                    >
                                        {!loading && <Send className="w-5 h-5 mr-2" />}
                                        Send the message
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>

                    {/* Coordonnées et carte */}
                    <Col xs={24} md={14}>
                        <Card title="Our contacts" style={{ fontFamily: "'Raleway', sans-serif" }}>
                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <EnvironmentOutlined style={{ fontSize: '20px', color: '#131a4eff', marginRight: '12px', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ margin: '0 0 ', fontFamily: "'Raleway', sans-serif"  }}>Adress</h4>
                                        <p style={{ margin: 0, color: '#666', fontFamily: "'Raleway', sans-serif"  }}>
                                            THE GROWTH SPHERE<br />
                                            Avenue principale<br />
                                            Goma, Nord-Kivu<br />
                                            République Démocratique du Congo
                                        </p>
                                    </div>
                                </div>

                                <Divider style={{ margin: '16px 0' }} />

                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <PhoneOutlined style={{ fontSize: '20px', color: '#131a4eff', marginRight: '12px', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ margin: '0 0 ', fontFamily: "'Raleway', sans-serif"  }}>Phone Number</h4>
                                        <p style={{ margin: 0, color: '#666', fontFamily: "'Raleway', sans-serif"  }}>
                                            +254 797 427 649<br />
                                            +254 790 782 936
                                        </p>
                                    </div>
                                </div>

                                <Divider style={{ margin: '16px 0' }} />

                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <MailOutlined style={{ fontSize: '20px', color: '#131a4eff', marginRight: '12px', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ margin: '0 0 ', fontFamily: "'Raleway', sans-serif" }}>Email</h4>
                                        <p style={{ margin: 0, color: '#666', fontFamily: "'Raleway', sans-serif"  }}>
                                            kyamompey@gmal.com
                                        </p>
                                    </div>
                                </div>

                                <Divider style={{ margin: '16px 0' }} />

                                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <ClockCircleOutlined style={{ fontSize: '20px', color: '#131a4eff', marginRight: '12px', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ margin: '0 0 ' , fontFamily: "'Raleway', sans-serif" }}>Schedule</h4>
                                        <p style={{ margin: 0, color: '#666', fontFamily: "'Raleway', sans-serif"  }}>
                                            monday - friday: 8h - 18h<br />
                                            Saturday: 8h - 12h<br />
                                            Sunday: Fermé
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Divider />

                            <div style={{ marginBottom: '24px' , fontFamily: "'Raleway', sans-serif" }}>
                                <h4>Follow Us</h4>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <Button
                                        type="primary"
                                        shape="circle"
                                        icon={<FacebookOutlined />}
                                        size="large"
                                        href="https://www.facebook.com/profile.php?id=61567925273894"
                                        style={{ backgroundColor: '#131a4eff' }}
                                    />
                                    <Button
                                        type="primary"
                                        shape="circle"
                                        icon={<TwitterOutlined />}
                                        size="large"
                                        href="https://x.com/madehub?lang=fr"
                                        style={{ backgroundColor: '#131a4eff' }}
                                    />
                                    <Button
                                        type="primary"
                                        shape="circle"
                                        icon={<LinkedinOutlined />}
                                        size="large"
                                        href="https://cd.linkedin.com/in/made-hub-407053310?trk=public_post_follow-view-profile"
                                        style={{ backgroundColor: '#131a4eff' }}
                                    />
                                </div>
                            </div>

                            <Divider />

                            <div>
                                <h4>Our Location</h4>
                                <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085951.225553808!2d27.36610055!3d-1.2397599499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19da5c72c5b7f38f%3A0x5f51e1dbf5b52b47!2sGoma%2C%20R%C3%A9publique%20d%C3%A9mocratique%20du%20Congo!5e0!3m2!1sfr!2sfr!4v1661234962346!5m2!1sfr!2sfr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Location of THE GROWTH SPHERE"
                                    />
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <Card
                        className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        bodyStyle={{ padding: '3rem' }}
                    >
                        <Title level={3} className="text-white text-2xl md:text-3xl mb-4"  style={{ fontFamily: "'Raleway', sans-serif" }}>
                            Ready to Make an Impact Together?
                        </Title>
                        <Paragraph className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Raleway', sans-serif" }}>
                            Whether you're a potential partner, donor, volunteer, or youth looking for opportunities,
                            we're here to help you grow beyond borders.
                        </Paragraph>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button
                                size="large"
                                className="bg-white text-blue-600 border-none hover:bg-gray-100 rounded-full px-8 py-4 h-auto font-semibold text-lg"
                            >
                                Become a Partner
                            </Button>
                            <Button
                                size="large"
                                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 rounded-full px-8 py-4 h-auto font-semibold text-lg"
                            >
                                Join Our Programs
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;